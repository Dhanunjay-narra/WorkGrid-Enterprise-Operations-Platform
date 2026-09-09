export type SupportAgentsMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsMappingStateMachine {
  private allowedTransitions: Record<SupportAgentsMappingState, SupportAgentsMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsMappingState, to: SupportAgentsMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsMappingState, to: SupportAgentsMappingState): SupportAgentsMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsMapping: " + from + " -> " + to);
    }
    return to;
  }
}
