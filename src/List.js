import styled from 'styled-components';
import { TabBodyContainer } from "./components/tab-body-container";

const ListItem = styled.div`
  padding: 8px 16px;
  
  &:nth-child(n+2) {
    border-top: 1px solid #D9DBDE;
  }

  cursor: pointer;
`

export const List = ({ langs, title, onEditItem }) => {
  const onListItemClick = (e, i) => {
    onEditItem(i, e.target.innerText);
  };
  return (
    <TabBodyContainer title={title}>
      <div>
        {
          langs.map((lang, index) => <ListItem key={index} onClick={(e) => onListItemClick(e, index)}>{ lang }</ListItem>)
        }
      </div>
    </TabBodyContainer>
  )
};
