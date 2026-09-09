export type ObsProbesPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesPolicyStateMachine {
  private allowedTransitions: Record<ObsProbesPolicyState, ObsProbesPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesPolicyState, to: ObsProbesPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesPolicyState, to: ObsProbesPolicyState): ObsProbesPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
