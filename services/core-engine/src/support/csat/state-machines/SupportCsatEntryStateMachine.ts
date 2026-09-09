export type SupportCsatEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportCsatEntryStateMachine {
  private allowedTransitions: Record<SupportCsatEntryState, SupportCsatEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportCsatEntryState, to: SupportCsatEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportCsatEntryState, to: SupportCsatEntryState): SupportCsatEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportCsatEntry: " + from + " -> " + to);
    }
    return to;
  }
}
