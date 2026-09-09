import { UUID } from '@nexora/types';

export interface JournalEntryLine {
  accountId: UUID;
  debit: number;
  credit: number;
  memo: string;
}

export interface JournalEntry {
  id: UUID;
  tenantId: UUID;
  date: string;
  referenceNo: string;
  lines: JournalEntryLine[];
  isBalanced: boolean;
  postedAt?: string;
}

export class LedgerEngine {
  private entries = new Map<UUID, JournalEntry>();
  private accountBalances = new Map<UUID, number>();

  public createJournalEntry(tenantId: UUID, ref: string, lines: JournalEntryLine[]): JournalEntry {
    let totalDebit = 0;
    let totalCredit = 0;

    lines.forEach(l => {
      totalDebit += l.debit || 0;
      totalCredit += l.credit || 0;
    });

    const isBalanced = Math.abs(totalDebit - totalCredit) < 0.0001;
    if (!isBalanced) {
      throw new Error(`Unbalanced entry: Total Debits (${totalDebit}) must equal Total Credits (${totalCredit})`);
    }

    const entry: JournalEntry = {
      id: 'je_' + Math.random().toString(36).substring(2, 9),
      tenantId,
      date: new Date().toISOString(),
      referenceNo: ref,
      lines,
      isBalanced: true,
      postedAt: new Date().toISOString()
    };

    // Update account balances
    lines.forEach(l => {
      const current = this.accountBalances.get(l.accountId) || 0;
      const net = (l.debit || 0) - (l.credit || 0);
      this.accountBalances.set(l.accountId, current + net);
    });

    this.entries.set(entry.id, entry);
    return entry;
  }

  public getAccountBalance(accountId: UUID): number {
    return this.accountBalances.get(accountId) || 0;
  }
}
