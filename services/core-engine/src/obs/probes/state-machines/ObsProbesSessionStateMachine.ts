export type ObsProbesSessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesSessionStateMachine {
  private allowedTransitions: Record<ObsProbesSessionState, ObsProbesSessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesSessionState, to: ObsProbesSessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesSessionState, to: ObsProbesSessionState): ObsProbesSessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesSession: " + from + " -> " + to);
    }
    return to;
  }
}
