export type SupportAgentsNodeState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsNodeStateMachine {
  private allowedTransitions: Record<SupportAgentsNodeState, SupportAgentsNodeState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsNodeState, to: SupportAgentsNodeState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsNodeState, to: SupportAgentsNodeState): SupportAgentsNodeState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsNode: " + from + " -> " + to);
    }
    return to;
  }
}
