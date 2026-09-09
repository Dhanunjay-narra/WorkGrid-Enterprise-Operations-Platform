export type AiAgentsPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsPolicyStateMachine {
  private allowedTransitions: Record<AiAgentsPolicyState, AiAgentsPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsPolicyState, to: AiAgentsPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsPolicyState, to: AiAgentsPolicyState): AiAgentsPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
