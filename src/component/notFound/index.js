import React, { Component } from 'react';
import styled from 'styled-components';


const NotFound = styled.div`
	width: 100%;
	text-align: center;
	font-size: 45px;
	font-weight: 600;
	height: 30vh;
	display: flex;
	align-items: center;
	justify-content: center;
`

function NotFoundComponent (){
	return <NotFound>404 - Sorry this page is not found</NotFound>
}

export default NotFoundComponent;