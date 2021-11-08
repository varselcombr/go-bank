-- CreateTable
CREATE TABLE "Bank" (
    "bank_id" INTEGER NOT NULL,
    "bank_agency" TEXT NOT NULL,
    "bank_name" TEXT NOT NULL,
    "bank_account" TEXT NOT NULL,
    "bank_number" TEXT NOT NULL,

    CONSTRAINT "Bank_pkey" PRIMARY KEY ("bank_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Bank_bank_id_key" ON "Bank"("bank_id");
