export type SupportAgentsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsPolicyStateMachine {
  private allowedTransitions: Record<SupportAgentsPolicyState, SupportAgentsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsPolicyState, to: SupportAgentsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsPolicyState, to: SupportAgentsPolicyState): SupportAgentsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
