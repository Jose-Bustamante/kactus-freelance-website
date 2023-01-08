import styles from './index.module.scss';

export function Index() {
  /*
   * Replace the elements below with your own.
   *
   * Note: The corresponding styles are in the ./index.scss file.
   */
  return (
    <div className={styles.page}>
      <div className="wrapper">
        <div className="container">
          <div id="welcome">
            <h1>
              <span> Hello there, </span>
              Welcome kactus-freelance-website 👋
            </h1>
            <br />
            <h2>
              <span>Do you ever said you were going to do something, you started it but never ever worked on it again. This is the living example 🙂</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
