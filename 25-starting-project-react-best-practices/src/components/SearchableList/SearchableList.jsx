import { useState } from "react";

export default function SearchableList({ items, children }) {
  const [searchTerm, setSearchTerm] = useState("");

  const searchResults = items.filter(item => JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase()));

  const handleSearchTermChange = event => {
    setSearchTerm(event.target.value);
  };

  return (
    <div className="searchable-list">
      <input type="search" placeholder="Search" onChange={handleSearchTermChange} />
      <ul>
        {searchResults.map((item, index) => (
          <li key={index}>{children(item)}</li>
        ))}
      </ul>
    </div>
  );
}
