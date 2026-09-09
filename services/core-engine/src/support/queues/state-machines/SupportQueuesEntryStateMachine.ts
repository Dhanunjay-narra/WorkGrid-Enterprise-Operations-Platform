export type SupportQueuesEntryState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesEntryStateMachine {
  private allowedTransitions: Record<SupportQueuesEntryState, SupportQueuesEntryState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesEntryState, to: SupportQueuesEntryState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesEntryState, to: SupportQueuesEntryState): SupportQueuesEntryState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesEntry: " + from + " -> " + to);
    }
    return to;
  }
}
