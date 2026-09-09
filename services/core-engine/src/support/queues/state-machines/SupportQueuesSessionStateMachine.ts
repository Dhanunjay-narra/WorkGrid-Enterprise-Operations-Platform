export type SupportQueuesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportQueuesSessionStateMachine {
  private allowedTransitions: Record<SupportQueuesSessionState, SupportQueuesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportQueuesSessionState, to: SupportQueuesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportQueuesSessionState, to: SupportQueuesSessionState): SupportQueuesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportQueuesSession: " + from + " -> " + to);
    }
    return to;
  }
}
