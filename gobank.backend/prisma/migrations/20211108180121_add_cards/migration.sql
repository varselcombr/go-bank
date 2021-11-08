-- CreateTable
CREATE TABLE "Cards" (
    "card_id" INTEGER NOT NULL,
    "card_owner" TEXT NOT NULL,
    "card_password" TEXT NOT NULL,
    "card_number" TEXT NOT NULL,
    "card_validate" TEXT NOT NULL,
    "card_paymentHistory" TEXT NOT NULL,
    "card_invoice" TEXT NOT NULL,
    "card_invoiceDueDate" TEXT NOT NULL,
    "card_limit" TEXT NOT NULL,
    "card_depositHistory" TEXT NOT NULL,
    "card_withdrawalHistory" TEXT NOT NULL,
    "card_transferHistory" TEXT NOT NULL,

    CONSTRAINT "Cards_pkey" PRIMARY KEY ("card_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cards_card_id_key" ON "Cards"("card_id");
