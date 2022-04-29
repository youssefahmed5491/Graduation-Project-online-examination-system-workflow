import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useTimer } from "react-timer-hook";
import ReactPaginate from "react-paginate";
import logo from "../HomePage/2560px-Adidas_Logo.svg.png";
import clock from "./chronograph-160753_1280.png";
import whiteTriangle from "../MainPage/whiteTriangle.png";
import Timer from "./Timer";

const ExamPaper = () => {
    const { username } = useParams();
    const [users, setUsers] = useState([
        {
            login: "mojombo",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojombo",
            html_url: "https://github.com/mojombo",
            followers_url: "https://api.github.com/users/mojombo/followers",
            following_url:
                "https://api.github.com/users/mojombo/following{/other_user}",
            gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/mojombo/subscriptions",
            organizations_url: "https://api.github.com/users/mojombo/orgs",
            repos_url: "https://api.github.com/users/mojombo/repos",
            events_url: "https://api.github.com/users/mojombo/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/mojombo/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "defunkt",
            id: 2,
            node_id: "MDQ6VXNlcjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/defunkt",
            html_url: "https://github.com/defunkt",
            followers_url: "https://api.github.com/users/defunkt/followers",
            following_url:
                "https://api.github.com/users/defunkt/following{/other_user}",
            gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/defunkt/subscriptions",
            organizations_url: "https://api.github.com/users/defunkt/orgs",
            repos_url: "https://api.github.com/users/defunkt/repos",
            events_url: "https://api.github.com/users/defunkt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/defunkt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "pjhyett",
            id: 3,
            node_id: "MDQ6VXNlcjM=",
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/pjhyett",
            html_url: "https://github.com/pjhyett",
            followers_url: "https://api.github.com/users/pjhyett/followers",
            following_url:
                "https://api.github.com/users/pjhyett/following{/other_user}",
            gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/pjhyett/subscriptions",
            organizations_url: "https://api.github.com/users/pjhyett/orgs",
            repos_url: "https://api.github.com/users/pjhyett/repos",
            events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/pjhyett/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "wycats",
            id: 4,
            node_id: "MDQ6VXNlcjQ=",
            avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wycats",
            html_url: "https://github.com/wycats",
            followers_url: "https://api.github.com/users/wycats/followers",
            following_url:
                "https://api.github.com/users/wycats/following{/other_user}",
            gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/wycats/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/wycats/subscriptions",
            organizations_url: "https://api.github.com/users/wycats/orgs",
            repos_url: "https://api.github.com/users/wycats/repos",
            events_url: "https://api.github.com/users/wycats/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/wycats/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "ezmobius",
            id: 5,
            node_id: "MDQ6VXNlcjU=",
            avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ezmobius",
            html_url: "https://github.com/ezmobius",
            followers_url: "https://api.github.com/users/ezmobius/followers",
            following_url:
                "https://api.github.com/users/ezmobius/following{/other_user}",
            gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/ezmobius/subscriptions",
            organizations_url: "https://api.github.com/users/ezmobius/orgs",
            repos_url: "https://api.github.com/users/ezmobius/repos",
            events_url:
                "https://api.github.com/users/ezmobius/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/ezmobius/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "ivey",
            id: 6,
            node_id: "MDQ6VXNlcjY=",
            avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ivey",
            html_url: "https://github.com/ivey",
            followers_url: "https://api.github.com/users/ivey/followers",
            following_url:
                "https://api.github.com/users/ivey/following{/other_user}",
            gists_url: "https://api.github.com/users/ivey/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/ivey/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/ivey/subscriptions",
            organizations_url: "https://api.github.com/users/ivey/orgs",
            repos_url: "https://api.github.com/users/ivey/repos",
            events_url: "https://api.github.com/users/ivey/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/ivey/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "evanphx",
            id: 7,
            node_id: "MDQ6VXNlcjc=",
            avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/evanphx",
            html_url: "https://github.com/evanphx",
            followers_url: "https://api.github.com/users/evanphx/followers",
            following_url:
                "https://api.github.com/users/evanphx/following{/other_user}",
            gists_url: "https://api.github.com/users/evanphx/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/evanphx/subscriptions",
            organizations_url: "https://api.github.com/users/evanphx/orgs",
            repos_url: "https://api.github.com/users/evanphx/repos",
            events_url: "https://api.github.com/users/evanphx/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/evanphx/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "vanpelt",
            id: 17,
            node_id: "MDQ6VXNlcjE3",
            avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vanpelt",
            html_url: "https://github.com/vanpelt",
            followers_url: "https://api.github.com/users/vanpelt/followers",
            following_url:
                "https://api.github.com/users/vanpelt/following{/other_user}",
            gists_url: "https://api.github.com/users/vanpelt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vanpelt/subscriptions",
            organizations_url: "https://api.github.com/users/vanpelt/orgs",
            repos_url: "https://api.github.com/users/vanpelt/repos",
            events_url: "https://api.github.com/users/vanpelt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vanpelt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "wayneeseguin",
            id: 18,
            node_id: "MDQ6VXNlcjE4",
            avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wayneeseguin",
            html_url: "https://github.com/wayneeseguin",
            followers_url:
                "https://api.github.com/users/wayneeseguin/followers",
            following_url:
                "https://api.github.com/users/wayneeseguin/following{/other_user}",
            gists_url:
                "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/wayneeseguin/subscriptions",
            organizations_url: "https://api.github.com/users/wayneeseguin/orgs",
            repos_url: "https://api.github.com/users/wayneeseguin/repos",
            events_url:
                "https://api.github.com/users/wayneeseguin/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/wayneeseguin/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "brynary",
            id: 19,
            node_id: "MDQ6VXNlcjE5",
            avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/brynary",
            html_url: "https://github.com/brynary",
            followers_url: "https://api.github.com/users/brynary/followers",
            following_url:
                "https://api.github.com/users/brynary/following{/other_user}",
            gists_url: "https://api.github.com/users/brynary/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/brynary/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/brynary/subscriptions",
            organizations_url: "https://api.github.com/users/brynary/orgs",
            repos_url: "https://api.github.com/users/brynary/repos",
            events_url: "https://api.github.com/users/brynary/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/brynary/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "kevinclark",
            id: 20,
            node_id: "MDQ6VXNlcjIw",
            avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/kevinclark",
            html_url: "https://github.com/kevinclark",
            followers_url: "https://api.github.com/users/kevinclark/followers",
            following_url:
                "https://api.github.com/users/kevinclark/following{/other_user}",
            gists_url:
                "https://api.github.com/users/kevinclark/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/kevinclark/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/kevinclark/subscriptions",
            organizations_url: "https://api.github.com/users/kevinclark/orgs",
            repos_url: "https://api.github.com/users/kevinclark/repos",
            events_url:
                "https://api.github.com/users/kevinclark/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/kevinclark/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "technoweenie",
            id: 21,
            node_id: "MDQ6VXNlcjIx",
            avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/technoweenie",
            html_url: "https://github.com/technoweenie",
            followers_url:
                "https://api.github.com/users/technoweenie/followers",
            following_url:
                "https://api.github.com/users/technoweenie/following{/other_user}",
            gists_url:
                "https://api.github.com/users/technoweenie/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/technoweenie/subscriptions",
            organizations_url: "https://api.github.com/users/technoweenie/orgs",
            repos_url: "https://api.github.com/users/technoweenie/repos",
            events_url:
                "https://api.github.com/users/technoweenie/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/technoweenie/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "macournoyer",
            id: 22,
            node_id: "MDQ6VXNlcjIy",
            avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/macournoyer",
            html_url: "https://github.com/macournoyer",
            followers_url: "https://api.github.com/users/macournoyer/followers",
            following_url:
                "https://api.github.com/users/macournoyer/following{/other_user}",
            gists_url:
                "https://api.github.com/users/macournoyer/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/macournoyer/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/macournoyer/subscriptions",
            organizations_url: "https://api.github.com/users/macournoyer/orgs",
            repos_url: "https://api.github.com/users/macournoyer/repos",
            events_url:
                "https://api.github.com/users/macournoyer/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/macournoyer/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "takeo",
            id: 23,
            node_id: "MDQ6VXNlcjIz",
            avatar_url: "https://avatars.githubusercontent.com/u/23?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/takeo",
            html_url: "https://github.com/takeo",
            followers_url: "https://api.github.com/users/takeo/followers",
            following_url:
                "https://api.github.com/users/takeo/following{/other_user}",
            gists_url: "https://api.github.com/users/takeo/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/takeo/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/takeo/subscriptions",
            organizations_url: "https://api.github.com/users/takeo/orgs",
            repos_url: "https://api.github.com/users/takeo/repos",
            events_url: "https://api.github.com/users/takeo/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/takeo/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "caged",
            id: 25,
            node_id: "MDQ6VXNlcjI1",
            avatar_url: "https://avatars.githubusercontent.com/u/25?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/caged",
            html_url: "https://github.com/caged",
            followers_url: "https://api.github.com/users/caged/followers",
            following_url:
                "https://api.github.com/users/caged/following{/other_user}",
            gists_url: "https://api.github.com/users/caged/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/caged/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/caged/subscriptions",
            organizations_url: "https://api.github.com/users/caged/orgs",
            repos_url: "https://api.github.com/users/caged/repos",
            events_url: "https://api.github.com/users/caged/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/caged/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "topfunky",
            id: 26,
            node_id: "MDQ6VXNlcjI2",
            avatar_url: "https://avatars.githubusercontent.com/u/26?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/topfunky",
            html_url: "https://github.com/topfunky",
            followers_url: "https://api.github.com/users/topfunky/followers",
            following_url:
                "https://api.github.com/users/topfunky/following{/other_user}",
            gists_url: "https://api.github.com/users/topfunky/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/topfunky/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/topfunky/subscriptions",
            organizations_url: "https://api.github.com/users/topfunky/orgs",
            repos_url: "https://api.github.com/users/topfunky/repos",
            events_url:
                "https://api.github.com/users/topfunky/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/topfunky/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "anotherjesse",
            id: 27,
            node_id: "MDQ6VXNlcjI3",
            avatar_url: "https://avatars.githubusercontent.com/u/27?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/anotherjesse",
            html_url: "https://github.com/anotherjesse",
            followers_url:
                "https://api.github.com/users/anotherjesse/followers",
            following_url:
                "https://api.github.com/users/anotherjesse/following{/other_user}",
            gists_url:
                "https://api.github.com/users/anotherjesse/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/anotherjesse/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/anotherjesse/subscriptions",
            organizations_url: "https://api.github.com/users/anotherjesse/orgs",
            repos_url: "https://api.github.com/users/anotherjesse/repos",
            events_url:
                "https://api.github.com/users/anotherjesse/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/anotherjesse/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "roland",
            id: 28,
            node_id: "MDQ6VXNlcjI4",
            avatar_url: "https://avatars.githubusercontent.com/u/28?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/roland",
            html_url: "https://github.com/roland",
            followers_url: "https://api.github.com/users/roland/followers",
            following_url:
                "https://api.github.com/users/roland/following{/other_user}",
            gists_url: "https://api.github.com/users/roland/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/roland/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/roland/subscriptions",
            organizations_url: "https://api.github.com/users/roland/orgs",
            repos_url: "https://api.github.com/users/roland/repos",
            events_url: "https://api.github.com/users/roland/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/roland/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "lukas",
            id: 29,
            node_id: "MDQ6VXNlcjI5",
            avatar_url: "https://avatars.githubusercontent.com/u/29?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/lukas",
            html_url: "https://github.com/lukas",
            followers_url: "https://api.github.com/users/lukas/followers",
            following_url:
                "https://api.github.com/users/lukas/following{/other_user}",
            gists_url: "https://api.github.com/users/lukas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/lukas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/lukas/subscriptions",
            organizations_url: "https://api.github.com/users/lukas/orgs",
            repos_url: "https://api.github.com/users/lukas/repos",
            events_url: "https://api.github.com/users/lukas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/lukas/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "fanvsfan",
            id: 30,
            node_id: "MDQ6VXNlcjMw",
            avatar_url: "https://avatars.githubusercontent.com/u/30?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/fanvsfan",
            html_url: "https://github.com/fanvsfan",
            followers_url: "https://api.github.com/users/fanvsfan/followers",
            following_url:
                "https://api.github.com/users/fanvsfan/following{/other_user}",
            gists_url: "https://api.github.com/users/fanvsfan/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/fanvsfan/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/fanvsfan/subscriptions",
            organizations_url: "https://api.github.com/users/fanvsfan/orgs",
            repos_url: "https://api.github.com/users/fanvsfan/repos",
            events_url:
                "https://api.github.com/users/fanvsfan/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/fanvsfan/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "tomtt",
            id: 31,
            node_id: "MDQ6VXNlcjMx",
            avatar_url: "https://avatars.githubusercontent.com/u/31?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tomtt",
            html_url: "https://github.com/tomtt",
            followers_url: "https://api.github.com/users/tomtt/followers",
            following_url:
                "https://api.github.com/users/tomtt/following{/other_user}",
            gists_url: "https://api.github.com/users/tomtt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/tomtt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/tomtt/subscriptions",
            organizations_url: "https://api.github.com/users/tomtt/orgs",
            repos_url: "https://api.github.com/users/tomtt/repos",
            events_url: "https://api.github.com/users/tomtt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/tomtt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "railsjitsu",
            id: 32,
            node_id: "MDQ6VXNlcjMy",
            avatar_url: "https://avatars.githubusercontent.com/u/32?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/railsjitsu",
            html_url: "https://github.com/railsjitsu",
            followers_url: "https://api.github.com/users/railsjitsu/followers",
            following_url:
                "https://api.github.com/users/railsjitsu/following{/other_user}",
            gists_url:
                "https://api.github.com/users/railsjitsu/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/railsjitsu/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/railsjitsu/subscriptions",
            organizations_url: "https://api.github.com/users/railsjitsu/orgs",
            repos_url: "https://api.github.com/users/railsjitsu/repos",
            events_url:
                "https://api.github.com/users/railsjitsu/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/railsjitsu/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "nitay",
            id: 34,
            node_id: "MDQ6VXNlcjM0",
            avatar_url: "https://avatars.githubusercontent.com/u/34?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/nitay",
            html_url: "https://github.com/nitay",
            followers_url: "https://api.github.com/users/nitay/followers",
            following_url:
                "https://api.github.com/users/nitay/following{/other_user}",
            gists_url: "https://api.github.com/users/nitay/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/nitay/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/nitay/subscriptions",
            organizations_url: "https://api.github.com/users/nitay/orgs",
            repos_url: "https://api.github.com/users/nitay/repos",
            events_url: "https://api.github.com/users/nitay/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/nitay/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "kevwil",
            id: 35,
            node_id: "MDQ6VXNlcjM1",
            avatar_url: "https://avatars.githubusercontent.com/u/35?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/kevwil",
            html_url: "https://github.com/kevwil",
            followers_url: "https://api.github.com/users/kevwil/followers",
            following_url:
                "https://api.github.com/users/kevwil/following{/other_user}",
            gists_url: "https://api.github.com/users/kevwil/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/kevwil/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/kevwil/subscriptions",
            organizations_url: "https://api.github.com/users/kevwil/orgs",
            repos_url: "https://api.github.com/users/kevwil/repos",
            events_url: "https://api.github.com/users/kevwil/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/kevwil/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "KirinDave",
            id: 36,
            node_id: "MDQ6VXNlcjM2",
            avatar_url: "https://avatars.githubusercontent.com/u/36?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/KirinDave",
            html_url: "https://github.com/KirinDave",
            followers_url: "https://api.github.com/users/KirinDave/followers",
            following_url:
                "https://api.github.com/users/KirinDave/following{/other_user}",
            gists_url: "https://api.github.com/users/KirinDave/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/KirinDave/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/KirinDave/subscriptions",
            organizations_url: "https://api.github.com/users/KirinDave/orgs",
            repos_url: "https://api.github.com/users/KirinDave/repos",
            events_url:
                "https://api.github.com/users/KirinDave/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/KirinDave/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "jamesgolick",
            id: 37,
            node_id: "MDQ6VXNlcjM3",
            avatar_url: "https://avatars.githubusercontent.com/u/37?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/jamesgolick",
            html_url: "https://github.com/jamesgolick",
            followers_url: "https://api.github.com/users/jamesgolick/followers",
            following_url:
                "https://api.github.com/users/jamesgolick/following{/other_user}",
            gists_url:
                "https://api.github.com/users/jamesgolick/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/jamesgolick/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/jamesgolick/subscriptions",
            organizations_url: "https://api.github.com/users/jamesgolick/orgs",
            repos_url: "https://api.github.com/users/jamesgolick/repos",
            events_url:
                "https://api.github.com/users/jamesgolick/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/jamesgolick/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "atmos",
            id: 38,
            node_id: "MDQ6VXNlcjM4",
            avatar_url: "https://avatars.githubusercontent.com/u/38?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/atmos",
            html_url: "https://github.com/atmos",
            followers_url: "https://api.github.com/users/atmos/followers",
            following_url:
                "https://api.github.com/users/atmos/following{/other_user}",
            gists_url: "https://api.github.com/users/atmos/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/atmos/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/atmos/subscriptions",
            organizations_url: "https://api.github.com/users/atmos/orgs",
            repos_url: "https://api.github.com/users/atmos/repos",
            events_url: "https://api.github.com/users/atmos/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/atmos/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "errfree",
            id: 44,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0",
            avatar_url: "https://avatars.githubusercontent.com/u/44?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/errfree",
            html_url: "https://github.com/errfree",
            followers_url: "https://api.github.com/users/errfree/followers",
            following_url:
                "https://api.github.com/users/errfree/following{/other_user}",
            gists_url: "https://api.github.com/users/errfree/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/errfree/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/errfree/subscriptions",
            organizations_url: "https://api.github.com/users/errfree/orgs",
            repos_url: "https://api.github.com/users/errfree/repos",
            events_url: "https://api.github.com/users/errfree/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/errfree/received_events",
            type: "Organization",
            site_admin: false,
        },
        {
            login: "mojodna",
            id: 45,
            node_id: "MDQ6VXNlcjQ1",
            avatar_url: "https://avatars.githubusercontent.com/u/45?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojodna",
            html_url: "https://github.com/mojodna",
            followers_url: "https://api.github.com/users/mojodna/followers",
            following_url:
                "https://api.github.com/users/mojodna/following{/other_user}",
            gists_url: "https://api.github.com/users/mojodna/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/mojodna/subscriptions",
            organizations_url: "https://api.github.com/users/mojodna/orgs",
            repos_url: "https://api.github.com/users/mojodna/repos",
            events_url: "https://api.github.com/users/mojodna/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/mojodna/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "bmizerany",
            id: 46,
            node_id: "MDQ6VXNlcjQ2",
            avatar_url: "https://avatars.githubusercontent.com/u/46?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/bmizerany",
            html_url: "https://github.com/bmizerany",
            followers_url: "https://api.github.com/users/bmizerany/followers",
            following_url:
                "https://api.github.com/users/bmizerany/following{/other_user}",
            gists_url: "https://api.github.com/users/bmizerany/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/bmizerany/subscriptions",
            organizations_url: "https://api.github.com/users/bmizerany/orgs",
            repos_url: "https://api.github.com/users/bmizerany/repos",
            events_url:
                "https://api.github.com/users/bmizerany/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/bmizerany/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "mojombo",
            id: 1,
            node_id: "MDQ6VXNlcjE=",
            avatar_url: "https://avatars.githubusercontent.com/u/1?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojombo",
            html_url: "https://github.com/mojombo",
            followers_url: "https://api.github.com/users/mojombo/followers",
            following_url:
                "https://api.github.com/users/mojombo/following{/other_user}",
            gists_url: "https://api.github.com/users/mojombo/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/mojombo/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/mojombo/subscriptions",
            organizations_url: "https://api.github.com/users/mojombo/orgs",
            repos_url: "https://api.github.com/users/mojombo/repos",
            events_url: "https://api.github.com/users/mojombo/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/mojombo/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "defunkt",
            id: 2,
            node_id: "MDQ6VXNlcjI=",
            avatar_url: "https://avatars.githubusercontent.com/u/2?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/defunkt",
            html_url: "https://github.com/defunkt",
            followers_url: "https://api.github.com/users/defunkt/followers",
            following_url:
                "https://api.github.com/users/defunkt/following{/other_user}",
            gists_url: "https://api.github.com/users/defunkt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/defunkt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/defunkt/subscriptions",
            organizations_url: "https://api.github.com/users/defunkt/orgs",
            repos_url: "https://api.github.com/users/defunkt/repos",
            events_url: "https://api.github.com/users/defunkt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/defunkt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "pjhyett",
            id: 3,
            node_id: "MDQ6VXNlcjM=",
            avatar_url: "https://avatars.githubusercontent.com/u/3?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/pjhyett",
            html_url: "https://github.com/pjhyett",
            followers_url: "https://api.github.com/users/pjhyett/followers",
            following_url:
                "https://api.github.com/users/pjhyett/following{/other_user}",
            gists_url: "https://api.github.com/users/pjhyett/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/pjhyett/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/pjhyett/subscriptions",
            organizations_url: "https://api.github.com/users/pjhyett/orgs",
            repos_url: "https://api.github.com/users/pjhyett/repos",
            events_url: "https://api.github.com/users/pjhyett/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/pjhyett/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "wycats",
            id: 4,
            node_id: "MDQ6VXNlcjQ=",
            avatar_url: "https://avatars.githubusercontent.com/u/4?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wycats",
            html_url: "https://github.com/wycats",
            followers_url: "https://api.github.com/users/wycats/followers",
            following_url:
                "https://api.github.com/users/wycats/following{/other_user}",
            gists_url: "https://api.github.com/users/wycats/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/wycats/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/wycats/subscriptions",
            organizations_url: "https://api.github.com/users/wycats/orgs",
            repos_url: "https://api.github.com/users/wycats/repos",
            events_url: "https://api.github.com/users/wycats/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/wycats/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "ezmobius",
            id: 5,
            node_id: "MDQ6VXNlcjU=",
            avatar_url: "https://avatars.githubusercontent.com/u/5?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ezmobius",
            html_url: "https://github.com/ezmobius",
            followers_url: "https://api.github.com/users/ezmobius/followers",
            following_url:
                "https://api.github.com/users/ezmobius/following{/other_user}",
            gists_url: "https://api.github.com/users/ezmobius/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/ezmobius/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/ezmobius/subscriptions",
            organizations_url: "https://api.github.com/users/ezmobius/orgs",
            repos_url: "https://api.github.com/users/ezmobius/repos",
            events_url:
                "https://api.github.com/users/ezmobius/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/ezmobius/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "ivey",
            id: 6,
            node_id: "MDQ6VXNlcjY=",
            avatar_url: "https://avatars.githubusercontent.com/u/6?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/ivey",
            html_url: "https://github.com/ivey",
            followers_url: "https://api.github.com/users/ivey/followers",
            following_url:
                "https://api.github.com/users/ivey/following{/other_user}",
            gists_url: "https://api.github.com/users/ivey/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/ivey/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/ivey/subscriptions",
            organizations_url: "https://api.github.com/users/ivey/orgs",
            repos_url: "https://api.github.com/users/ivey/repos",
            events_url: "https://api.github.com/users/ivey/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/ivey/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "evanphx",
            id: 7,
            node_id: "MDQ6VXNlcjc=",
            avatar_url: "https://avatars.githubusercontent.com/u/7?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/evanphx",
            html_url: "https://github.com/evanphx",
            followers_url: "https://api.github.com/users/evanphx/followers",
            following_url:
                "https://api.github.com/users/evanphx/following{/other_user}",
            gists_url: "https://api.github.com/users/evanphx/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/evanphx/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/evanphx/subscriptions",
            organizations_url: "https://api.github.com/users/evanphx/orgs",
            repos_url: "https://api.github.com/users/evanphx/repos",
            events_url: "https://api.github.com/users/evanphx/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/evanphx/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "vanpelt",
            id: 17,
            node_id: "MDQ6VXNlcjE3",
            avatar_url: "https://avatars.githubusercontent.com/u/17?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/vanpelt",
            html_url: "https://github.com/vanpelt",
            followers_url: "https://api.github.com/users/vanpelt/followers",
            following_url:
                "https://api.github.com/users/vanpelt/following{/other_user}",
            gists_url: "https://api.github.com/users/vanpelt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/vanpelt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/vanpelt/subscriptions",
            organizations_url: "https://api.github.com/users/vanpelt/orgs",
            repos_url: "https://api.github.com/users/vanpelt/repos",
            events_url: "https://api.github.com/users/vanpelt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/vanpelt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "wayneeseguin",
            id: 18,
            node_id: "MDQ6VXNlcjE4",
            avatar_url: "https://avatars.githubusercontent.com/u/18?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/wayneeseguin",
            html_url: "https://github.com/wayneeseguin",
            followers_url:
                "https://api.github.com/users/wayneeseguin/followers",
            following_url:
                "https://api.github.com/users/wayneeseguin/following{/other_user}",
            gists_url:
                "https://api.github.com/users/wayneeseguin/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/wayneeseguin/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/wayneeseguin/subscriptions",
            organizations_url: "https://api.github.com/users/wayneeseguin/orgs",
            repos_url: "https://api.github.com/users/wayneeseguin/repos",
            events_url:
                "https://api.github.com/users/wayneeseguin/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/wayneeseguin/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "brynary",
            id: 19,
            node_id: "MDQ6VXNlcjE5",
            avatar_url: "https://avatars.githubusercontent.com/u/19?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/brynary",
            html_url: "https://github.com/brynary",
            followers_url: "https://api.github.com/users/brynary/followers",
            following_url:
                "https://api.github.com/users/brynary/following{/other_user}",
            gists_url: "https://api.github.com/users/brynary/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/brynary/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/brynary/subscriptions",
            organizations_url: "https://api.github.com/users/brynary/orgs",
            repos_url: "https://api.github.com/users/brynary/repos",
            events_url: "https://api.github.com/users/brynary/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/brynary/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "kevinclark",
            id: 20,
            node_id: "MDQ6VXNlcjIw",
            avatar_url: "https://avatars.githubusercontent.com/u/20?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/kevinclark",
            html_url: "https://github.com/kevinclark",
            followers_url: "https://api.github.com/users/kevinclark/followers",
            following_url:
                "https://api.github.com/users/kevinclark/following{/other_user}",
            gists_url:
                "https://api.github.com/users/kevinclark/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/kevinclark/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/kevinclark/subscriptions",
            organizations_url: "https://api.github.com/users/kevinclark/orgs",
            repos_url: "https://api.github.com/users/kevinclark/repos",
            events_url:
                "https://api.github.com/users/kevinclark/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/kevinclark/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "technoweenie",
            id: 21,
            node_id: "MDQ6VXNlcjIx",
            avatar_url: "https://avatars.githubusercontent.com/u/21?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/technoweenie",
            html_url: "https://github.com/technoweenie",
            followers_url:
                "https://api.github.com/users/technoweenie/followers",
            following_url:
                "https://api.github.com/users/technoweenie/following{/other_user}",
            gists_url:
                "https://api.github.com/users/technoweenie/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/technoweenie/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/technoweenie/subscriptions",
            organizations_url: "https://api.github.com/users/technoweenie/orgs",
            repos_url: "https://api.github.com/users/technoweenie/repos",
            events_url:
                "https://api.github.com/users/technoweenie/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/technoweenie/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "macournoyer",
            id: 22,
            node_id: "MDQ6VXNlcjIy",
            avatar_url: "https://avatars.githubusercontent.com/u/22?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/macournoyer",
            html_url: "https://github.com/macournoyer",
            followers_url: "https://api.github.com/users/macournoyer/followers",
            following_url:
                "https://api.github.com/users/macournoyer/following{/other_user}",
            gists_url:
                "https://api.github.com/users/macournoyer/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/macournoyer/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/macournoyer/subscriptions",
            organizations_url: "https://api.github.com/users/macournoyer/orgs",
            repos_url: "https://api.github.com/users/macournoyer/repos",
            events_url:
                "https://api.github.com/users/macournoyer/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/macournoyer/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "takeo",
            id: 23,
            node_id: "MDQ6VXNlcjIz",
            avatar_url: "https://avatars.githubusercontent.com/u/23?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/takeo",
            html_url: "https://github.com/takeo",
            followers_url: "https://api.github.com/users/takeo/followers",
            following_url:
                "https://api.github.com/users/takeo/following{/other_user}",
            gists_url: "https://api.github.com/users/takeo/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/takeo/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/takeo/subscriptions",
            organizations_url: "https://api.github.com/users/takeo/orgs",
            repos_url: "https://api.github.com/users/takeo/repos",
            events_url: "https://api.github.com/users/takeo/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/takeo/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "caged",
            id: 25,
            node_id: "MDQ6VXNlcjI1",
            avatar_url: "https://avatars.githubusercontent.com/u/25?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/caged",
            html_url: "https://github.com/caged",
            followers_url: "https://api.github.com/users/caged/followers",
            following_url:
                "https://api.github.com/users/caged/following{/other_user}",
            gists_url: "https://api.github.com/users/caged/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/caged/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/caged/subscriptions",
            organizations_url: "https://api.github.com/users/caged/orgs",
            repos_url: "https://api.github.com/users/caged/repos",
            events_url: "https://api.github.com/users/caged/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/caged/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "topfunky",
            id: 26,
            node_id: "MDQ6VXNlcjI2",
            avatar_url: "https://avatars.githubusercontent.com/u/26?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/topfunky",
            html_url: "https://github.com/topfunky",
            followers_url: "https://api.github.com/users/topfunky/followers",
            following_url:
                "https://api.github.com/users/topfunky/following{/other_user}",
            gists_url: "https://api.github.com/users/topfunky/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/topfunky/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/topfunky/subscriptions",
            organizations_url: "https://api.github.com/users/topfunky/orgs",
            repos_url: "https://api.github.com/users/topfunky/repos",
            events_url:
                "https://api.github.com/users/topfunky/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/topfunky/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "anotherjesse",
            id: 27,
            node_id: "MDQ6VXNlcjI3",
            avatar_url: "https://avatars.githubusercontent.com/u/27?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/anotherjesse",
            html_url: "https://github.com/anotherjesse",
            followers_url:
                "https://api.github.com/users/anotherjesse/followers",
            following_url:
                "https://api.github.com/users/anotherjesse/following{/other_user}",
            gists_url:
                "https://api.github.com/users/anotherjesse/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/anotherjesse/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/anotherjesse/subscriptions",
            organizations_url: "https://api.github.com/users/anotherjesse/orgs",
            repos_url: "https://api.github.com/users/anotherjesse/repos",
            events_url:
                "https://api.github.com/users/anotherjesse/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/anotherjesse/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "roland",
            id: 28,
            node_id: "MDQ6VXNlcjI4",
            avatar_url: "https://avatars.githubusercontent.com/u/28?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/roland",
            html_url: "https://github.com/roland",
            followers_url: "https://api.github.com/users/roland/followers",
            following_url:
                "https://api.github.com/users/roland/following{/other_user}",
            gists_url: "https://api.github.com/users/roland/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/roland/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/roland/subscriptions",
            organizations_url: "https://api.github.com/users/roland/orgs",
            repos_url: "https://api.github.com/users/roland/repos",
            events_url: "https://api.github.com/users/roland/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/roland/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "lukas",
            id: 29,
            node_id: "MDQ6VXNlcjI5",
            avatar_url: "https://avatars.githubusercontent.com/u/29?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/lukas",
            html_url: "https://github.com/lukas",
            followers_url: "https://api.github.com/users/lukas/followers",
            following_url:
                "https://api.github.com/users/lukas/following{/other_user}",
            gists_url: "https://api.github.com/users/lukas/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/lukas/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/lukas/subscriptions",
            organizations_url: "https://api.github.com/users/lukas/orgs",
            repos_url: "https://api.github.com/users/lukas/repos",
            events_url: "https://api.github.com/users/lukas/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/lukas/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "fanvsfan",
            id: 30,
            node_id: "MDQ6VXNlcjMw",
            avatar_url: "https://avatars.githubusercontent.com/u/30?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/fanvsfan",
            html_url: "https://github.com/fanvsfan",
            followers_url: "https://api.github.com/users/fanvsfan/followers",
            following_url:
                "https://api.github.com/users/fanvsfan/following{/other_user}",
            gists_url: "https://api.github.com/users/fanvsfan/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/fanvsfan/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/fanvsfan/subscriptions",
            organizations_url: "https://api.github.com/users/fanvsfan/orgs",
            repos_url: "https://api.github.com/users/fanvsfan/repos",
            events_url:
                "https://api.github.com/users/fanvsfan/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/fanvsfan/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "tomtt",
            id: 31,
            node_id: "MDQ6VXNlcjMx",
            avatar_url: "https://avatars.githubusercontent.com/u/31?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/tomtt",
            html_url: "https://github.com/tomtt",
            followers_url: "https://api.github.com/users/tomtt/followers",
            following_url:
                "https://api.github.com/users/tomtt/following{/other_user}",
            gists_url: "https://api.github.com/users/tomtt/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/tomtt/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/tomtt/subscriptions",
            organizations_url: "https://api.github.com/users/tomtt/orgs",
            repos_url: "https://api.github.com/users/tomtt/repos",
            events_url: "https://api.github.com/users/tomtt/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/tomtt/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "railsjitsu",
            id: 32,
            node_id: "MDQ6VXNlcjMy",
            avatar_url: "https://avatars.githubusercontent.com/u/32?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/railsjitsu",
            html_url: "https://github.com/railsjitsu",
            followers_url: "https://api.github.com/users/railsjitsu/followers",
            following_url:
                "https://api.github.com/users/railsjitsu/following{/other_user}",
            gists_url:
                "https://api.github.com/users/railsjitsu/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/railsjitsu/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/railsjitsu/subscriptions",
            organizations_url: "https://api.github.com/users/railsjitsu/orgs",
            repos_url: "https://api.github.com/users/railsjitsu/repos",
            events_url:
                "https://api.github.com/users/railsjitsu/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/railsjitsu/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "nitay",
            id: 34,
            node_id: "MDQ6VXNlcjM0",
            avatar_url: "https://avatars.githubusercontent.com/u/34?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/nitay",
            html_url: "https://github.com/nitay",
            followers_url: "https://api.github.com/users/nitay/followers",
            following_url:
                "https://api.github.com/users/nitay/following{/other_user}",
            gists_url: "https://api.github.com/users/nitay/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/nitay/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/nitay/subscriptions",
            organizations_url: "https://api.github.com/users/nitay/orgs",
            repos_url: "https://api.github.com/users/nitay/repos",
            events_url: "https://api.github.com/users/nitay/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/nitay/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "kevwil",
            id: 35,
            node_id: "MDQ6VXNlcjM1",
            avatar_url: "https://avatars.githubusercontent.com/u/35?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/kevwil",
            html_url: "https://github.com/kevwil",
            followers_url: "https://api.github.com/users/kevwil/followers",
            following_url:
                "https://api.github.com/users/kevwil/following{/other_user}",
            gists_url: "https://api.github.com/users/kevwil/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/kevwil/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/kevwil/subscriptions",
            organizations_url: "https://api.github.com/users/kevwil/orgs",
            repos_url: "https://api.github.com/users/kevwil/repos",
            events_url: "https://api.github.com/users/kevwil/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/kevwil/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "KirinDave",
            id: 36,
            node_id: "MDQ6VXNlcjM2",
            avatar_url: "https://avatars.githubusercontent.com/u/36?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/KirinDave",
            html_url: "https://github.com/KirinDave",
            followers_url: "https://api.github.com/users/KirinDave/followers",
            following_url:
                "https://api.github.com/users/KirinDave/following{/other_user}",
            gists_url: "https://api.github.com/users/KirinDave/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/KirinDave/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/KirinDave/subscriptions",
            organizations_url: "https://api.github.com/users/KirinDave/orgs",
            repos_url: "https://api.github.com/users/KirinDave/repos",
            events_url:
                "https://api.github.com/users/KirinDave/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/KirinDave/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "jamesgolick",
            id: 37,
            node_id: "MDQ6VXNlcjM3",
            avatar_url: "https://avatars.githubusercontent.com/u/37?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/jamesgolick",
            html_url: "https://github.com/jamesgolick",
            followers_url: "https://api.github.com/users/jamesgolick/followers",
            following_url:
                "https://api.github.com/users/jamesgolick/following{/other_user}",
            gists_url:
                "https://api.github.com/users/jamesgolick/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/jamesgolick/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/jamesgolick/subscriptions",
            organizations_url: "https://api.github.com/users/jamesgolick/orgs",
            repos_url: "https://api.github.com/users/jamesgolick/repos",
            events_url:
                "https://api.github.com/users/jamesgolick/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/jamesgolick/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "atmos",
            id: 38,
            node_id: "MDQ6VXNlcjM4",
            avatar_url: "https://avatars.githubusercontent.com/u/38?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/atmos",
            html_url: "https://github.com/atmos",
            followers_url: "https://api.github.com/users/atmos/followers",
            following_url:
                "https://api.github.com/users/atmos/following{/other_user}",
            gists_url: "https://api.github.com/users/atmos/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/atmos/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/atmos/subscriptions",
            organizations_url: "https://api.github.com/users/atmos/orgs",
            repos_url: "https://api.github.com/users/atmos/repos",
            events_url: "https://api.github.com/users/atmos/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/atmos/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "errfree",
            id: 44,
            node_id: "MDEyOk9yZ2FuaXphdGlvbjQ0",
            avatar_url: "https://avatars.githubusercontent.com/u/44?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/errfree",
            html_url: "https://github.com/errfree",
            followers_url: "https://api.github.com/users/errfree/followers",
            following_url:
                "https://api.github.com/users/errfree/following{/other_user}",
            gists_url: "https://api.github.com/users/errfree/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/errfree/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/errfree/subscriptions",
            organizations_url: "https://api.github.com/users/errfree/orgs",
            repos_url: "https://api.github.com/users/errfree/repos",
            events_url: "https://api.github.com/users/errfree/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/errfree/received_events",
            type: "Organization",
            site_admin: false,
        },
        {
            login: "mojodna",
            id: 45,
            node_id: "MDQ6VXNlcjQ1",
            avatar_url: "https://avatars.githubusercontent.com/u/45?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/mojodna",
            html_url: "https://github.com/mojodna",
            followers_url: "https://api.github.com/users/mojodna/followers",
            following_url:
                "https://api.github.com/users/mojodna/following{/other_user}",
            gists_url: "https://api.github.com/users/mojodna/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/mojodna/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/mojodna/subscriptions",
            organizations_url: "https://api.github.com/users/mojodna/orgs",
            repos_url: "https://api.github.com/users/mojodna/repos",
            events_url: "https://api.github.com/users/mojodna/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/mojodna/received_events",
            type: "User",
            site_admin: false,
        },
        {
            login: "bmizerany",
            id: 46,
            node_id: "MDQ6VXNlcjQ2",
            avatar_url: "https://avatars.githubusercontent.com/u/46?v=4",
            gravatar_id: "",
            url: "https://api.github.com/users/bmizerany",
            html_url: "https://github.com/bmizerany",
            followers_url: "https://api.github.com/users/bmizerany/followers",
            following_url:
                "https://api.github.com/users/bmizerany/following{/other_user}",
            gists_url: "https://api.github.com/users/bmizerany/gists{/gist_id}",
            starred_url:
                "https://api.github.com/users/bmizerany/starred{/owner}{/repo}",
            subscriptions_url:
                "https://api.github.com/users/bmizerany/subscriptions",
            organizations_url: "https://api.github.com/users/bmizerany/orgs",
            repos_url: "https://api.github.com/users/bmizerany/repos",
            events_url:
                "https://api.github.com/users/bmizerany/events{/privacy}",
            received_events_url:
                "https://api.github.com/users/bmizerany/received_events",
            type: "User",
            site_admin: false,
        },
    ]);
    const [check, setCheck] = useState(false);
    const [ind, setInd] = useState(1);
    const [arraylol, setArraylol] = useState(Array(users.length).fill(1));
    const [answersArray, setAnswersArray] = useState(["a", "b", "c", "d"]);
    const [questionAnswer, setQuestionAnswer] = useState(Array(users.length));
    const [tryChecks, setTryChecks] = useState([
        false,
        false,
        false,
        false,
        false,
        false,
    ]);

    useEffect(() => {
        let temp = [...arraylol];
        temp[1] = 2;
        console.log("temp", temp);
        setArraylol(temp);
    }, []);

    const handleNext = () => {
        setCheck(false);
        if (ind > users.length) {
            setInd(0);
            handleSquares(0);
        } else {
            setInd(ind + 1);
            // let temp = [...arraylol];
            // temp[ind + 1] = 2;
            // setArraylol(temp);
            handleSquares(ind + 1);
        }
    };
    const handlePrevious = () => {
        setCheck(false);
        if (ind === 1) {
            setInd(users.length);
            // let temp = [...arraylol];
            // temp[users.length - 1] = 2;
            // setArraylol(temp);
            handleSquares(users.length);
        } else {
            setInd(ind - 1);
            // let temp = [...arraylol];
            // temp[ind - 1] = 2;
            // setArraylol(temp);
            handleSquares(ind - 1);
        }
    };
    const handleSquares = (number) => {
        if (arraylol[number] === 3) {
            setInd(number);
            let x = questionAnswer[number];
            let temp3 = [false, false, false, false, false, false];
            console.log("the x we need");
            console.log(x);
            temp3[x - 1] = true;
            console.log("temp3");
            console.log(temp3);
            setTryChecks(temp3);
            console.log("el mafrood yetba3 true");
            console.log(tryChecks[x - 1]);

            console.log(tryChecks);
        } else {
            let temp3 = [false, false, false, false, false, false];

            setTryChecks(temp3);
            console.log("what we need");
            console.log(questionAnswer);
            setCheck(false);
            let temp = [...arraylol];
            temp[number] = 2;
            setArraylol(temp);
            setInd(number);
        }
    };

    //display certain object given a number
    const displayuser = (number) => {
        return users.find((user) => user.id === number);
    };

    const handleRadio = (e) => {
        // console.log("option value");
        // console.log("ggg", e.target.value);
        let temp2 = questionAnswer;
        temp2[ind] = e.target.value;
        setQuestionAnswer(temp2);
        console.log(questionAnswer);
        setCheck(true);
        let temp = [...arraylol];
        temp[ind] = 3;
        setArraylol(temp);
        let x = questionAnswer[ind];
        let temp3 = [false, false, false, false, false, false];
        temp3[x - 1] = true;
        setTryChecks(temp3);
        console.log(tryChecks);
    };
    const time = new Date();
    time.setMinutes(time.getMinutes() + 6);
    return (
        <div
            className="container-fluid vh-100 vw-100"
            style={{ overflow: "hidden" }}
        >
            {/* navbar section */}
            <div className="row bg-primary " style={{ height: "7%" }}>
                <div
                    className="  d-flex  align-items-center h-100 "
                    style={{ backgroundColor: "#6bfff5" }}
                >
                    <div>
                        <img
                            src={logo}
                            alt=""
                            style={{ width: "5%" }}
                            className="h-50  m-5"
                        />
                        Subject:Math Name:youssef ahmed Id:5491
                    </div>

                    <div className="float">
                        <img src={clock} alt="" className="h-75  m-5" />
                    </div>
                    <div className="float">
                        <Timer expiryTimestamp={time} />
                    </div>
                </div>
            </div>
            {/* navbar section */}
            <div className="row" style={{ height: "93%" }}>
                <div
                    className="col"
                    style={{ backgroundColor: "#EBEBEB", height: "100%" }}
                >
                    <div
                        className="row"
                        style={{
                            height: "90%",
                            display: "flex",
                            flexDirection: "column",
                            overflow: "auto",
                        }}
                    >
                        <div>
                            <div style={{ padding: "10px", height: "50px" }}>
                                {"Question" + displayuser(ind).id}
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    margin: "10px",
                                    width: "98%",
                                }}
                            >
                                {displayuser(ind).avatar_url}
                            </div>
                            <div
                                style={{
                                    backgroundColor: "white",
                                    borderStyle: "solid",
                                    borderRadius: "10px",
                                    margin: "10px",
                                    width: "98%",
                                }}
                            >
                                {Array.from(
                                    Array(parseInt(answersArray.length)),
                                    (e, i) => {
                                        return (
                                            <>
                                                <div key={i}>
                                                    <div className="form-check form-check-inline mt-4 mb-4">
                                                        <input
                                                            className="form-check-input"
                                                            type="radio"
                                                            id={i}
                                                            name="inlineRadioOptions"
                                                            value={i + 1}
                                                            checked={
                                                                tryChecks[i]
                                                            }
                                                            onChange={(e) =>
                                                                handleRadio(e)
                                                            }
                                                            required
                                                        />
                                                        <label
                                                            className="form-check-label"
                                                            htmlFor={i}
                                                        >
                                                            {answersArray[i]}
                                                        </label>
                                                    </div>
                                                </div>
                                            </>
                                        );
                                    }
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="row" style={{ height: "3%" }}>
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                position: "absolute",
                                width: "80%",
                                bottom: "7%",
                                right: "20%",
                            }}
                        >
                            Lorem ipsum, dolor sit amet consectetur adipisicing
                            elit. Ut unde, dolore in
                        </div>
                    </div>
                    <div
                        className="row"
                        style={{ height: "7%", background: "grey" }}
                    >
                        <button
                            onClick={handlePrevious}
                            style={{
                                width: "150px",
                                background: "grey",
                                border: "0",
                                padding: "0",
                            }}
                        >
                            <div>
                                Previous
                                <img
                                    src={whiteTriangle}
                                    alt=""
                                    className="float"
                                    style={{
                                        height: "30px",
                                        transform: "rotate(180deg)",
                                    }}
                                />
                            </div>
                        </button>
                        <button
                            onClick={handleNext}
                            style={{
                                width: "100px",
                                background: "grey",
                                border: "0",
                                padding: "0",
                            }}
                        >
                            <div>
                                <img
                                    src={whiteTriangle}
                                    alt=""
                                    style={{
                                        float: "left",
                                        height: "30px",
                                    }}
                                />
                                Next
                            </div>
                        </button>
                    </div>
                </div>
                <div
                    className="col-3  "
                    style={{ height: "100%", width: "20%" }}
                >
                    <div
                        className="row"
                        style={{
                            backgroundColor: "#EBEBEB",
                            borderStyle: "solid",
                            borderRight: "0px",
                            borderTop: "0px",
                            borderColor: "white",
                            overflow: "auto",
                            height: "50%",
                        }}
                    >
                        <div>
                            <div
                                style={{
                                    display: "flex",
                                    justifyContent: "space-around",
                                    margin: "10px",
                                }}
                            >
                                Questions
                            </div>

                            {users.map((user, index) => {
                                return (
                                    <div
                                        key={index}
                                        className=""
                                        style={{
                                            height: "25px",
                                            width: "25px",
                                            backgroundColor: `${
                                                arraylol[user.id] === 1
                                                    ? "grey"
                                                    : arraylol[user.id] === 2
                                                    ? "red"
                                                    : "green"
                                            }`,
                                            margin: "5px",
                                            display: "flex",
                                            float: "left",
                                            justifyContent: "space-around",
                                            borderRadius: "5px",
                                            color: "white",
                                        }}
                                        onClick={() => handleSquares(user.id)}
                                    >
                                        {user.id}
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                    <div
                        className="row h-50"
                        style={{
                            backgroundColor: "#EBEBEB",
                            borderStyle: "solid",
                            borderRight: "0px",
                            borderTop: "0px",
                            borderBottom: "0px",
                            borderColor: "white",
                        }}
                    >
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "flex-start",
                                alignItems: "center",
                                flexWrap: "wrap",
                                alignContent: "center",
                                marginLeft: "20%",
                                marginRight: "20%",
                                width: "60%",
                            }}
                        >
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "green",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 3).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Attempted
                                </span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "grey",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 1).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Not Attempted
                                </span>
                            </div>
                            <div>
                                <div
                                    style={{
                                        height: "30px",
                                        width: "30px",
                                        backgroundColor: "red",
                                        marginBottom: "10px",
                                        display: "flex",
                                        float: "left",
                                        justifyContent: "space-around",
                                        borderRadius: "5px",
                                        color: "white",
                                        paddingTop: "2px",
                                    }}
                                >
                                    {arraylol.filter((e) => e === 2).length}
                                </div>
                                <span
                                    style={{
                                        paddingLeft: "10px",
                                        paddingTop: "2px",
                                    }}
                                >
                                    Left Empty
                                </span>
                            </div>
                        </div>
                        <div
                            style={{
                                display: "flex",
                                alignItems: "flex-end",
                                marginBottom: "5px",
                            }}
                        >
                            <button
                                style={{
                                    width: "80%",
                                    height: "35%",
                                    marginLeft: "10%",
                                    fontSize: "140%",
                                    background: "blue",
                                    borderRadius: "10px",
                                }}
                            >
                                Submit Exam
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExamPaper;
