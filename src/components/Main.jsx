import React from 'react';
import {Container, Grid} from "@material-ui/core";
import firebase from "firebase";
import {useCollectionData} from "react-firebase-hooks/firestore";
import BasicCard from "./Card";

export const Main = () => {
    const firestore = firebase.firestore();

    // const [dynamicMeditation,dynamicMeditationLoading] = useCollectionData(firestore.collection('Динамическая медитация'));
    // const [yogaData, yogaLoading] = useCollectionData(firestore.collection('Йога'));
    // const [aymData, aymLoading] = useCollectionData(firestore.collection('Аум'));

    const [eventsData, eventsLoading] = useCollectionData(firestore
        .collection("events")
        .orderBy("Тип", "asc"));

    console.log(eventsData );

    return (
        <Container>
            <Grid container alignItems={"center"} direction={"column"} justifyContent={"center"}
                  style={{height: window.innerHeight}}>
                {!eventsLoading && eventsData.map((item, index) => (
                    <BasicCard key={`${index}+${item["Название"]}`} name={item["Название"]} description={item["Описание"]}
                               timeEnd={item["Время окончания"]} timeStart={item["Время начала"]}/>
                ))}
                {/*{!dynamicMeditationLoading && dynamicMeditation.map((item, index) => (*/}
                {/*    <BasicCard key={`${index}+${item["Название"]}`} name={item["Название"]} description={item["Описание"]}*/}
                {/*        timeEnd={item["Время окончания"]} timeStart={item["Время начала"]}/>*/}
                {/*))}*/}
                {/*{!yogaLoading && yogaData.map((item, index) => (*/}
                {/*    <BasicCard  key={`${index}+${item["Название"]}`} name={item["Название"]} description={item["Описание"]}*/}
                {/*        timeEnd={item["Время окончания"]} timeStart={item["Время начала"]}/>*/}
                {/*))}*/}
                {/*{!aymLoading && aymData.map((item, index) => (*/}
                {/*    <BasicCard  key={`${index}+${item["Название"]}`} name={item["Название"]} description={item["Описание"]}*/}
                {/*         timeEnd={item["Время окончания"]} timeStart={item["Время начала"]}/>*/}
                {/*))}*/}
            </Grid>
        </Container>
    );
};