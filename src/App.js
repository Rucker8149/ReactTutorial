import { useState, useContext } from 'react';
import { List } from "./List";
import { Form } from "./Form";
import styled from 'styled-components';
import { Header } from "./Header";
import { ThemeContext } from "./contexts/ThemeContext";

const Container = styled.div`
  height: 100%;
  color: ${({ theme }) => theme.color};
  background-color: ${({ theme }) => theme.backgroundColor};
`

function App({ data }) {
  const [tab, setTab] = useState('list');
  const [langs, setLangs] = useState(data);
  const [lang, setLang] = useState({index: 0, value: ''});

  const [theme] = useContext(ThemeContext);

  const addLang = (lang) => {
    setLangs([...langs, lang]);
    setTab('list');
  };

  const editLang = (lang, i) => {
    langs[i] = lang;
    setLangs(langs);
    setTab('list');
  };

  const editItem = (i, v) => {
    setTab('form');
    setLang({index: i, value: v});
  };

  return (
    <Container theme={theme}>
      <Header tab={tab} setTab={setTab}/>
      {
        tab === 'list' ? <List langs={langs} title="取り扱い言語リスト" onEditItem={editItem} />
          : <Form onAddLang={addLang} onEditLang={editLang} editValue={lang} />
      }
    </Container>
  );
}

export default App;
