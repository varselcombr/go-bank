-- CreateTable
CREATE TABLE "User" (
    "user_id" SERIAL NOT NULL,
    "user_name" TEXT NOT NULL,
    "user_password" TEXT NOT NULL,
    "user_email" TEXT NOT NULL,
    "user_recovery" TEXT NOT NULL,
    "user_phone" TEXT NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("user_id")
);

-- CreateTable
CREATE TABLE "Personal" (
    "personal_id" SERIAL NOT NULL,
    "personal_fname" TEXT NOT NULL,
    "personal_lname" TEXT NOT NULL,
    "personal_age" TEXT NOT NULL,
    "personal_profile" TEXT NOT NULL,
    "personal_accountid" INTEGER NOT NULL,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("personal_id")
);

-- CreateTable
CREATE TABLE "Card" (
    "card_id" SERIAL NOT NULL,
    "card_number" TEXT NOT NULL,
    "card_password" TEXT NOT NULL,
    "card_validate" TEXT NOT NULL,
    "card_ccv" TEXT NOT NULL,
    "card_paymenth" TEXT NOT NULL,
    "card_invoice" TEXT NOT NULL,
    "card_invoiceduedate" TEXT NOT NULL,
    "card_limit" TEXT NOT NULL,
    "card_deposith" TEXT NOT NULL,
    "card_withdrawh" TEXT NOT NULL,
    "card_transferh" TEXT NOT NULL,
    "card_ownerid" INTEGER NOT NULL,

    CONSTRAINT "Card_pkey" PRIMARY KEY ("card_id")
);

-- CreateTable
CREATE TABLE "Bank" (
    "bank_id" SERIAL NOT NULL,
    "bank_agency" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_account" TEXT NOT NULL,
    "bank_number" TEXT NOT NULL,
    "bank_ownerid" INTEGER NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("bank_id")
);

-- AddForeignKey
ALTER TABLE "Personal" ADD CONSTRAINT "Personal_personal_accountid_fkey" FOREIGN KEY ("personal_accountid") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Card" ADD CONSTRAINT "Card_card_ownerid_fkey" FOREIGN KEY ("card_ownerid") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Bank" ADD CONSTRAINT "Bank_bank_ownerid_fkey" FOREIGN KEY ("bank_ownerid") REFERENCES "User"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
