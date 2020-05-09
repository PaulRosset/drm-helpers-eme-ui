import styled from "styled-components";

export const FeatureContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 0 0 1px rgba(10, 82, 151, 1.25), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"
      : "0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"} 
  background: ${(props) => (props.isDarkMode ? "#282c35" : "#fff")};
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  border-radius: 3px;
  overflow: hidden;
  padding: 1.5rem;
  margin: 24px;
  height: fit-content;
  width: fit-content;
  flex: auto;
`;

export const FlexContainer = styled.div`
  width: ${(props) => props.width || "auto"};
  display: flex;
  flex-direction: ${(props) => props.direction || "row"};
  align-items: ${(props) => props.align || "baseline"};
  justify-content: ${(props) => props.justify || "baseline"};
  margin: ${(props) => props.margin || "0"};
  border: ${(props) => props.border || "none"};
  border-radius: ${(props) => props.borderRadius || "auto"};
`;

export const TitleContainer = styled(FlexContainer)`
  margin: 0 0px 10px 0;
  justify-content: space-between;
  align-items: center;
`;

export const Highlighter = styled.span`
  font-weight: bold;
  color: ${(props) => props.color || "auto"};
`;

export const FeatureTitle = styled.h3`
  font-weight: bold;
  text-decoration: underline;
  margin: 0;
`;

export const FeatureSubTitle = styled.div`
  font-weight: bold;
  text-decoration: underline;
  margin: 8px 0 8px 0;
`;

export const Image = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
  margin: 0 5px 0 5px;
`;

export const ImageLogo = styled.img`
  height: ${(props) => props.height};
  width: ${(props) => props.width};
  cursor: pointer;
  margin: 0 5px 0 5px;
  transition: 0.4s;
  border-radius: 50%;
  padding: 10px;
  transition: 0.4s;

  &:hover {
    transition: 0.4s;
    background-color: rgba(15, 20, 25, 0.15);
  }
`;

export const InputText = styled.input`
  border: 1px solid rgba(34, 36, 38, 0.15);
  border-radius: 3px;
  padding: 10px;
  margin-top: 5px;
  width: 100%;
`;

export const Button = styled.button`
  background-color:  ${(props) =>
    props.isDarkMode ? "#282c35" : "#transparent"};
  border: ${(props) =>
    props.isDarkMode
      ? "0.3px solid rgba(10, 82, 151, 1.25)"
      : "0.3px solid rgba(34, 36, 38, 0.15)"};
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 0 0 1px rgba(10, 82, 151, 1.25), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"
      : "0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"}
  border-radius: 3px;
  padding: 8px 25px;
  cursor: pointer;
  text-decoration: underline;
  transition: 0.5s;
  font-weight: bold;
  margin: ${(props) => props.margin || "auto"}
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};

  &:hover {
    background-color: #222629;
    color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
  }
`;

export const BufferTypeContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 0 0 1px rgba(255, 255, 255, 1.25), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"
      : "0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"}
  background-color: ${(props) => (props.isDarkMode ? "#282c35" : "#fff")};
  border-radius: 3px;
  overflow: hidden;
  padding: 0.5rem;
  margin: ${(props) => props.margin || "none"};
`;

export const Line = styled.hr`
  border: ${(props) =>
    props.isDarkMode
      ? "0.3px solid rgba(10, 82, 151, 1.25)"
      : "0.3px solid rgba(34, 36, 38, 0.15)"};
  width: 100%;
`;
export const Select = styled.select`
  width: 100%;
  background: ${(props) => (props.isDarkMode ? "#282c35" : "transparent")};
  border: solid 0.5px transparent;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 0 0 1px rgba(255, 255, 255, 1.25), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"
      : "0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"}
  border-radius: 3px;
  padding: 5px;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
`;

export const TextArea = styled.textarea`
  width: 100%;
  background: ${(props) => (props.isDarkMode ? "#282c35" : "transparent")};
  border: solid 0.5px transparent;
  box-shadow: ${(props) =>
    props.isDarkMode
      ? "0 0 0 1px rgba(255, 255, 255, 1.25), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"
      : "0 0 0 1px rgba(35, 38, 59, 0.05), 0 1px 3px 0 rgba(35, 38, 59, 0.15);"}
  border-radius: 3px;
  padding: 5px;
  margin: 20px 0 0 0;
  min-height: 300px;
  width: 100%;
  color: ${(props) => (props.isDarkMode ? "#fff" : "#000")};
`;
