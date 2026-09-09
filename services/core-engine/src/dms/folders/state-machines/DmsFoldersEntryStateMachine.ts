export type DmsFoldersEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class DmsFoldersEntryStateMachine {
  private allowedTransitions: Record<DmsFoldersEntryState, DmsFoldersEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: DmsFoldersEntryState, to: DmsFoldersEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: DmsFoldersEntryState, to: DmsFoldersEntryState): DmsFoldersEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for DmsFoldersEntry: " + from + " -> " + to);
    }
    return to;
  }
}
