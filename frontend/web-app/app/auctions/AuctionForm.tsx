/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";

import { Button, TextInput } from "flowbite-react";
import React, { useEffect } from "react";
import { FieldValues, useForm } from "react-hook-form";
import Input from "../components/Input";
import DateInput from "../components/DateInput";

export default function AuctionForm() {
    const {
        control,
        handleSubmit,
        setFocus,
        formState: { isSubmitting, isValid, isDirty, errors },
    } = useForm({
        mode: "onTouched",
    });

    useEffect(() => {
        setFocus("make");
    }, [setFocus]);

    function onSubmit(data: FieldValues) {
        console.log(data);
    }

    return (
        <form className="flex flex-col mt-3" onSubmit={handleSubmit(onSubmit)}>
            <Input
                label="Marka"
                name="make"
                control={control}
                rules={{ required: "* Marka është obligative" }}
            />
            <Input
                label="Modeli"
                name="model"
                control={control}
                rules={{ required: "* Modeli është obligativ" }}
            />
            <Input
                label="Ngjyra"
                name="color"
                control={control}
                rules={{ required: "* Ngjyra është obligative" }}
            />

            <div className="grid grid-cols-2 gap-3">
                <Input
                    label="Viti"
                    name="year"
                    control={control}
                    type="number"
                    rules={{ required: "* Viti është obligativ" }}
                />
                <Input
                    label="Kilometrat"
                    name="mileage"
                    control={control}
                    type="number"
                    rules={{ required: "* Kilometrat janë obligative" }}
                />
            </div>

            <Input
                label="Foto URL"
                name="imageUrl"
                control={control}
                rules={{ required: "* Foto është obligative" }}
            />

            <div className="grid grid-cols-2 gap-3">
                <Input
                    label="Çmimi Rezervë (shëno 0 nëse nuk ka rezervë)"
                    name="reservePrice"
                    control={control}
                    type="number"
                    rules={{ required: "* Çmimi rezervë është obligativ" }}
                />
                <DateInput
                    label="Data/Ora e Përfundimit të Ankandit"
                    name="auctionEnd"
                    control={control}
                    dateFormat='dd MMM yyyy h:mm a'
                    showTimeSelect
                    rules={{
                        required: "* Data/Ora e përfundimit të ankandit është obligative",
                    }}
                />
            </div>

            <div className="flex justify-between">
                <Button outline color="gray">
                    Anulo
                </Button>
                <Button
                    isProcessing={isSubmitting}
                    type="submit"
                    outline
                    color="success"
                >
                    Dërgo
                </Button>
            </div>
        </form>
    );
}
