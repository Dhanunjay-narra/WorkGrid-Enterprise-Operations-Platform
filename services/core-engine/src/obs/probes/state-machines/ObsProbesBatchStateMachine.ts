export type ObsProbesBatchState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesBatchStateMachine {
  private allowedTransitions: Record<ObsProbesBatchState, ObsProbesBatchState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesBatchState, to: ObsProbesBatchState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesBatchState, to: ObsProbesBatchState): ObsProbesBatchState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesBatch: " + from + " -> " + to);
    }
    return to;
  }
}
