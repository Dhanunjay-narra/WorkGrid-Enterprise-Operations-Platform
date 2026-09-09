export type AiAgentsSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class AiAgentsSessionStateMachine {
  private allowedTransitions: Record<AiAgentsSessionState, AiAgentsSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: AiAgentsSessionState, to: AiAgentsSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: AiAgentsSessionState, to: AiAgentsSessionState): AiAgentsSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for AiAgentsSession: " + from + " -> " + to);
    }
    return to;
  }
}
