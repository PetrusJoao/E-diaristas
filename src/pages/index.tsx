import SafeEnvironment from "UI/components/feedback/SaveEnvironment/SafeEnvironment";
import PageTitle from "UI/components/data-display/PageTitle/PageTitle";
import UserInformation from "UI/components/data-display/UserInformation/UserInformation";

export default function Home() {
  return (
    <div>
      <SafeEnvironment />
      <PageTitle
        title={"Conheça os profissionais"}
        subtitle={
          "Preencha seu endereço e veja todos os profissionais perto de você!"
        }
      />

      <UserInformation
        name={"João Pedro"}
        picture={"https://github.com/Maddox78.png"}
        rating={4}
        description={"São Luis"}
      />
    </div>
  );
}
