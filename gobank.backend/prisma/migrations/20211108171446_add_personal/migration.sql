-- CreateTable
CREATE TABLE "Personal" (
    "personal_account" INTEGER NOT NULL,
    "personal_fname" TEXT NOT NULL,
    "personal_lname" TEXT NOT NULL,
    "personal_age" TEXT NOT NULL,
    "personal_profilePic" TEXT NOT NULL,

    CONSTRAINT "Personal_pkey" PRIMARY KEY ("personal_account")
);

-- CreateIndex
CREATE UNIQUE INDEX "Personal_personal_account_key" ON "Personal"("personal_account");
