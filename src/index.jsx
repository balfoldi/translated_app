import 'bootstrap/dist/css/bootstrap.css';

import React, { useState } from "react";
import { IntlProvider, FormattedMessage } from 'react-intl';

import messagesFr from './translation/fr';
import messagesEn from './translation/en';
import ReactDOM from "react-dom";

const messages = {
	fr: messagesFr,
	en: messagesEn,
};

const App = () => {
	const [language, setLanguage] = useState("fr");

	return (
		<IntlProvider locale={language} messages={messages[language]}>
			<button onClick={()=>setLanguage("fr")} class="btn btn-info">FR</button>
			<button onClick={()=>setLanguage("en")} class="btn btn-info">en</button>
			<p>Bienvenue dans mon application</p>
			<FormattedMessage id="error.field" />
			<FormattedMessage id="error.password.numberchar" />
			
			<FormattedMessage id="text.work" />
			<FormattedMessage id="text.contact" />
		</IntlProvider>
	);
};

ReactDOM.render(<App />, document.querySelector("#root"));