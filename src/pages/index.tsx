import { useCallback, useState } from "react";
import Header from "../components/header/header";
import Posts from "../components/posts/posts-container";

function IndexPage() {
  const [searchValue, setSearchValue] = useState("");

  const onSearchChangle = (value: string) => {
    setSearchValue(value);
  };

  return (
    <>
      <Header handleSearch={(value: string) => onSearchChangle(value)} />
      <Posts filterString={searchValue} />
    </>
  );
}

export default IndexPage;
