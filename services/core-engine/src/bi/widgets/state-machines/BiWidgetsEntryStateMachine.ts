export type BiWidgetsEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class BiWidgetsEntryStateMachine {
  private allowedTransitions: Record<BiWidgetsEntryState, BiWidgetsEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: BiWidgetsEntryState, to: BiWidgetsEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: BiWidgetsEntryState, to: BiWidgetsEntryState): BiWidgetsEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for BiWidgetsEntry: " + from + " -> " + to);
    }
    return to;
  }
}
