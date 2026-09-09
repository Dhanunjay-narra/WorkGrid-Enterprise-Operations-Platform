export type AiAgentsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsThresholdStateMachine {
  private allowedTransitions: Record<AiAgentsThresholdState, AiAgentsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsThresholdState, to: AiAgentsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsThresholdState, to: AiAgentsThresholdState): AiAgentsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
