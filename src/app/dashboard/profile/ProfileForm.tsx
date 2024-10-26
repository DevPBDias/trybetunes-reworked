"use client";

import user from "@/assets/images/user-big.png";
import Image from "next/image";
import { Clipboard, Save } from "lucide-react";
import { registerSchema } from "@/schemas";
import { z } from "zod";
import { useForm, FormProvider } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useUserContext } from "@/context/user-provider";
import { Form } from "@/components/form";

type ProfileData = z.infer<typeof registerSchema>;

const ProfileForm = () => {
  const router = useRouter();
  const { setUserName } = useUserContext();
  const profileForm = useForm<ProfileData>({
    resolver: zodResolver(registerSchema),
  });

  const {
    handleSubmit,
    formState: { errors, isSubmitSuccessful },
    reset,
  } = profileForm;

  const handleEdit = (data: ProfileData) => {
    localStorage.setItem("loggedUser", JSON.stringify([data]));
    localStorage.setItem("trybetunes-users", JSON.stringify(data));
    const joinName = data.firstName.concat(" ", data.lastName);
    setUserName(joinName);
    if (isSubmitSuccessful) {
      reset({ email: "", firstName: "", lastName: "", password: "" });
    }
    router.push("/dashboard");
  };

  return (
    <FormProvider {...profileForm}>
      <form className="container-form" onSubmit={handleSubmit(handleEdit)}>
        <picture className="user-container-image">
          <Image
            className="user-image"
            src={user}
            alt="user image"
            quality={100}
            priority
          />
        </picture>
        <section className="container-inputs">
          <div className="container-row-inputs">
            <Form.Field className="container-field">
              <Form.Label htmlFor="firstName">Nome</Form.Label>
              <Form.Input
                className={`${errors.firstName ? "error-border" : ""}`}
                type="text"
                name="firstName"
              />
              <Form.ErrorMessage field="firstName" />
            </Form.Field>
            <Form.Field className="container-field">
              <Form.Label htmlFor="lastName">Sobrenome</Form.Label>
              <Form.Input
                className={`${errors.lastName ? "error-border" : ""}`}
                type="text"
                name="lastName"
              />
              <Form.ErrorMessage field="lastName" />
            </Form.Field>
          </div>
          <div className="container-row-inputs">
            <Form.Field className="container-field">
              <Form.Label htmlFor="email">E-mail</Form.Label>
              <Form.Input
                className={`${errors.email ? "error-border" : ""}`}
                type="text"
                name="email"
              />
              <Form.ErrorMessage field="email" />
            </Form.Field>
            <Form.Field className="container-field">
              <Form.Label htmlFor="password">Senha</Form.Label>
              <Form.Input
                className={`${errors.password ? "error-border" : ""}`}
                type="text"
                name="password"
              />
              <Form.ErrorMessage field="password" />
            </Form.Field>
          </div>
        </section>
        <section className="container-btns">
          <Form.Button
            className="btn-profile"
            type="button"
            onClick={() =>
              reset({ email: "", firstName: "", lastName: "", password: "" })
            }
          >
            <p>Limpar</p>
            <Clipboard size={24} color="#001400" />
          </Form.Button>
          <Form.Button className="btn-profile main-btn" type="submit">
            <p>Salvar</p>
            <Save size={24} color="#EBFFEB" />
          </Form.Button>
        </section>
      </form>
    </FormProvider>
  );
};

export default ProfileForm;
