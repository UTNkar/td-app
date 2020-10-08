import React, { useState, useEffect } from 'react';
import { State, News } from '../types';
import { FlatList,
         StyleSheet,
         Text,
         View,
         TouchableOpacity,
       } from 'react-native';
import Divider from './Divider';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';
import { toggleNewsReadAction } from '../redux/actionTypes';
import { saveState } from '../redux/state';
import NothingHere from './NothingHere'

type NewsItemProps = News & { toggleRead: () => void }

const NewsItem = (props: NewsItemProps) => {
    const desiredLength = props.body.length < 400;
    const ellipsis = "... "

    const [open, setOpen] = useState(false);
    const [content, setContent] = useState(props.body.substring(0, 397) +
                                           ( desiredLength ? '' : ellipsis));

    function toggleOpen() {
        if (open) {
            setContent(props.body.substring(0, 397) + ( desiredLength ? '' : ellipsis))
        } else {
            setContent(props.body)
        }

        setOpen(!open);
    }

    const Content = (): JSX.Element =>
          (<View style={{ paddingBottom: 20 }}>
            <View style={style.newsTitleContainer}>
                <Text style={style.newsTitle}>{props.read ? '' : '🔴 '}{props.title}</Text>
            </View>
            <View style={style.senderTextContainer}>
                <Text style={style.senderText}>Från {props.sender}, {props.senderDate}</Text>
            </View>
               <View style={style.contentTextContainer}>
                <Text style={style.contentText}>{content}{ desiredLength || open
                                                           ? null
                                                           : (<Text style={style.readMore}>LÄS MER</Text>) }
                </Text>
            </View>
            <Divider color='#707070' width='100%'/>
           </View>
          )

    let Rendered: JSX.Element;
    if (desiredLength) {
        Rendered = (<Content/>);
    } else {
        Rendered = (<TouchableOpacity onPress={toggleOpen}>
                        <Content/>
                    </TouchableOpacity>)
    }


    return Rendered;
}

type NewsListProps = {
    news: Array<News>;
    header: () => JSX.Element;
    toggleRead: (news: News) => void;
    navigation: any;
}

function NewsList(props: NewsListProps) {
    useEffect(() => {
        const unsub = props.navigation.addListener('blur', async () => {
            props.toggleRead();
            saveState(props.state);
        })

        return unsub;
    }, [props.navigation])
    if (props.news.length === 0) {
        return (<>
            {props.header()}
            <NothingHere/>
               </>)
    } else {
        return (<FlatList
                data={props.news}
                renderItem={({ item }) =>
                    (<NewsItem title={item.title}
                     body={item.body}
                     sender={item.sender}
                     senderDate={item.senderDate}
                     key={item.key}
                     read={item.read}
                        />)}
                ListHeaderComponent={props.header}
                showsVerticalScrollIndicator={false}
            />);
    }
};

                   const mapStateToProps = (state: State) => ({ news: state.news, state });

const mapDispatchToProps = (dispatch: Dispatch) =>
    ({ toggleRead: () => dispatch(toggleNewsReadAction()) });

export default connect(mapStateToProps, mapDispatchToProps)(NewsList);

const style = StyleSheet.create({
    newsTitleContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    newsTitle: {
        fontSize: 18,
        lineHeight: 20,
        fontWeight: '700',
        color: 'white',
    },
    dot: {
        height: 15,
        width: 15,
        marginRight: 15,
    },
    senderTextContainer: {
        marginTop: 5,
        marginBottom: 10,
    },
    senderText: {
        fontSize: 14,
        fontWeight: 'normal',
        color: '#C4C4C4',
    },
    contentTextContainer: {
        marginBottom: 20,
    },
    contentText: {
        color: 'white',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'justify',
    },
    readMore: {
        color: 'white',
        fontSize: 14,
        lineHeight: 17,
        textAlign: 'justify',
        fontWeight: 'bold',
    }
})
