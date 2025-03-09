
import streamlit as st

st.title("Football League Dashboard")

st.header("Welcome to Football League Stats")
st.write("This is a simple Streamlit application for viewing football league statistics.")

# Add a simple sidebar
st.sidebar.title("Navigation")
page = st.sidebar.selectbox("Choose a page", ["Home", "Teams", "Matches", "Statistics"])

if page == "Home":
    st.subheader("Home")
    st.write("Welcome to the Football League application.")
elif page == "Teams":
    st.subheader("Teams")
    st.write("Team information will be displayed here.")
elif page == "Matches":
    st.subheader("Matches")
    st.write("Match information will be displayed here.")
elif page == "Statistics":
    st.subheader("Statistics")
    st.write("League statistics will be displayed here.")
