export type ObsProbesStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesStateStateMachine {
  private allowedTransitions: Record<ObsProbesStateState, ObsProbesStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesStateState, to: ObsProbesStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesStateState, to: ObsProbesStateState): ObsProbesStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesState: " + from + " -> " + to);
    }
    return to;
  }
}
