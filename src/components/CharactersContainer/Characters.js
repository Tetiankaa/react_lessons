import React, {useEffect} from 'react';
import {useSearchParams} from "react-router-dom";
import {charactersService} from "../../services";
import {useDispatch, useSelector} from "react-redux";
import {characterActions} from "../../redux/slices/characterSlice";
import {Character} from "./Character";

const Characters = () => {
    const [query, setQuery] = useSearchParams({page:'1'});
    const page = query.get('page');

    const dispatch = useDispatch();
    const {characters} = useSelector(state => state.characters)

    useEffect(() => {
        setQuery({page:'1'})
    }, []);

    useEffect(() => {
        charactersService.getAll(page).then(({data})=>dispatch(characterActions.setResponse(data)))
    }, [page]);
    return (
        <div>
            {characters.map(character=><Character key={character.id} character={character} />)}
        </div>
    );
};

export {Characters};