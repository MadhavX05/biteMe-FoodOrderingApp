import { useState } from "react";

const Section = ({ title, description, isVisible, setIsVisible }) => {
  // const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      <div className="border border-black m-2">
        <h1 className="text-2xl font-medium p-2">{title}</h1>
        {isVisible ? (
          <button
            className="font-semibold underline cursor-pointer pl-1"
            onClick={() => setIsVisible(false)}
          >
            hide
          </button>
        ) : (
          <button
            className="font-semibold underline cursor-pointer pl-1"
            onClick={() => setIsVisible(true)}
          >
            show
          </button>
        )}

        {isVisible && <p className="text-xl p-1">{description}</p>}
      </div>
    </>
  );
};

const Instamart = () => {
  const [isVisibleSection, setIsVisibleSection] = useState("About");

  return (
    <div>
      <h1>Hello👋</h1>
      <h1 className="text-3xl font-bold">it's Instamart</h1>

      <Section
        title={"About Instamart"}
        description={
          "who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisibleSection === "About"}
        setIsVisible={() => setIsVisibleSection("About")}
      />
      <Section
        title={"Team Instamart"}
        description={
          "who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisibleSection === "Team"}
        setIsVisible={() => setIsVisibleSection("Team")}
      />
      <Section
        title={"Careers"}
        description={
          "who are so beguiled and demoralized by the charms of pleasure of the moment, so blinded by desire, that they cannot foresee the pain and trouble that are bound to ensue; and equal blame belongs to those who fail in their duty through weakness of will, which is the same as saying through shrinking from toil and pain. These cases are perfectly simple and easy to distinguish. In a free hour, when our power of choice is untrammelled and when nothing prevents our being able to do what we like best, every pleasure is to be welcomed and every pain avoided. But in certain circumstances and owing to the claims of duty or the obligations of business it will frequently occur that pleasures have to be repudiated and annoyances accepted. The wise man therefore always holds in these matters to this principle of selection: he rejects pleasures to secure other greater pleasures, or else he endures pains to avoid worse pains."
        }
        isVisible={isVisibleSection === "Careers"}
        setIsVisible={() => setIsVisibleSection("Careers")}
      />
    </div>
  );
};

export default Instamart;
