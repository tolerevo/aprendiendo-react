export function TwitterFollowCard({ userName, name, isFollowing }) {
  return (
    <article
      className="tw-followCard"
      style={{ display: "flex", alignItems: "center", color: "#fff" }}
    >
      <header className="tw-followCard-header">
        <img
          className="tw-followCard-avatar"
          src={`https://unavatar.io/github/${userName}`}
          alt="avatar de tolerevo"
        />
        <div className="tw-followCard-info">
          <strong>{name}</strong>
          <span className="tw-followCard-infoUserName">@{userName}</span>
        </div>
      </header>

      <aside>
        <button className="tw-followCard-button">Seguir</button>
      </aside>
    </article>
  );
}
