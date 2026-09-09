export type BiExportsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiExportsEntryStateMachine {
  private allowedTransitions: Record<BiExportsEntryState, BiExportsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiExportsEntryState, to: BiExportsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiExportsEntryState, to: BiExportsEntryState): BiExportsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiExportsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
