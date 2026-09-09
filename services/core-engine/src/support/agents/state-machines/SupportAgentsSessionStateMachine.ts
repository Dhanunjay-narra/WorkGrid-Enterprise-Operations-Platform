export type SupportAgentsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class SupportAgentsSessionStateMachine {
  private allowedTransitions: Record<SupportAgentsSessionState, SupportAgentsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: SupportAgentsSessionState, to: SupportAgentsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: SupportAgentsSessionState, to: SupportAgentsSessionState): SupportAgentsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for SupportAgentsSession: " + from + " -> " + to);
    }
    return to;
  }
}
