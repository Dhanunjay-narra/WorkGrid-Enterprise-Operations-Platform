export type ObsProbesConfigState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesConfigStateMachine {
  private allowedTransitions: Record<ObsProbesConfigState, ObsProbesConfigState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesConfigState, to: ObsProbesConfigState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesConfigState, to: ObsProbesConfigState): ObsProbesConfigState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesConfig: " + from + " -> " + to);
    }
    return to;
  }
}
