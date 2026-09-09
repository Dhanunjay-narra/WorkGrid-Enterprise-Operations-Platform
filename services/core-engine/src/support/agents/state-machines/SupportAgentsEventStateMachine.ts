export type SupportAgentsEventState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsEventStateMachine {
  private allowedTransitions: Record<SupportAgentsEventState, SupportAgentsEventState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsEventState, to: SupportAgentsEventState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsEventState, to: SupportAgentsEventState): SupportAgentsEventState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsEvent: " + from + " -> " + to);
    }
    return to;
  }
}
