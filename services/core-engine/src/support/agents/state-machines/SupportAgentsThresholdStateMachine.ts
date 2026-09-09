export type SupportAgentsThresholdState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsThresholdStateMachine {
  private allowedTransitions: Record<SupportAgentsThresholdState, SupportAgentsThresholdState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsThresholdState, to: SupportAgentsThresholdState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsThresholdState, to: SupportAgentsThresholdState): SupportAgentsThresholdState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsThreshold: " + from + " -> " + to);
    }
    return to;
  }
}
