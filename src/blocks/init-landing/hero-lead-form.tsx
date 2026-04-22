"use client";

import { ArrowRight } from "lucide-react";
import { useMemo, useState } from "react";
import { PhoneInput } from "react-international-phone";

export const InitLandingHeroLeadForm = ({
	buttonLabel,
	helperText,
	placeholder,
}: {
	buttonLabel: string;
	helperText: string;
	placeholder: string;
}) => {
	const [phoneValue, setPhoneValue] = useState("");
	const [error, setError] = useState<string | null>(null);
	const isPhoneValid = useMemo(() => {
		if (!phoneValue) {
			return false;
		}

		return /^\+\d{8,15}$/.test(phoneValue);
	}, [phoneValue]);

	return (
		<form
			className="relative z-30 mx-auto mt-10 flex w-full max-w-[42rem] flex-col items-center gap-3 lg:mb-12"
			onSubmit={(event) => {
				event.preventDefault();

				if (!isPhoneValid) {
					setError("Введите корректный номер телефона.");
					return;
				}

				setError(null);
				if (typeof window !== "undefined") {
					window.sessionStorage.setItem("init.heroLeadPhone", phoneValue);
					document.getElementById("contact")?.scrollIntoView({
						behavior: "smooth",
						block: "start",
					});
				}
			}}
		>
			<div className="w-full rounded-[1.75rem] border border-[color-mix(in_oklab,var(--photon-site-border)_55%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-surface)_70%,transparent)] p-2 shadow-[0_20px_60px_-30px_rgba(32,22,18,0.28)] backdrop-blur-xl">
				<div className="flex w-full flex-col gap-2 sm:flex-row sm:items-center">
					<PhoneInput
						className="hero-phone-input flex-1"
						countrySelectorStyleProps={{
							buttonClassName: "hero-phone-input__selector",
							dropdownStyleProps: {
								className: "hero-phone-input__dropdown",
							},
						}}
						defaultCountry="kz"
						forceDialCode
						inputClassName={[
							"hero-phone-input__field h-[3.25rem] w-full rounded-[1.2rem] border border-[color-mix(in_oklab,var(--photon-site-border)_50%,transparent)] bg-[color-mix(in_oklab,var(--photon-site-background)_88%,transparent)] px-4 text-base text-[var(--photon-site-text)] shadow-sm outline-none transition focus-visible:border-[var(--photon-site-accent)] focus-visible:ring-4 focus-visible:ring-[color-mix(in_oklab,var(--photon-site-accent)_20%,transparent)]",
							error ? "border-red-500/60 focus-visible:ring-red-500/15" : "",
						].join(" ")}
						onChange={(phone) => {
							setPhoneValue(phone);
							if (error) {
								setError(null);
							}
						}}
						placeholder={placeholder}
						preferredCountries={["kz", "ru", "us"]}
						value={phoneValue}
						inputProps={{
							"aria-invalid": error ? "true" : "false",
							name: "phone",
							required: true,
						}}
					/>
					<button
						type="submit"
						className="group inline-flex h-[3.25rem] min-w-[158px] items-center justify-center gap-2 rounded-[1.2rem] bg-[var(--photon-site-accent)] px-6 text-base font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-[color-mix(in_oklab,var(--photon-site-accent)_25%,transparent)] sm:self-stretch"
					>
						{buttonLabel}
						<ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
					</button>
				</div>
			</div>

			<p
				className={[
					"max-w-[34rem] px-3 text-center text-sm leading-relaxed text-[var(--photon-site-muted-text)] transition-colors lg:pb-2",
					error ? "text-red-600" : "",
				].join(" ")}
			>
				{error ?? helperText}
			</p>
		</form>
	);
};
