export type ObsProbesMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsProbesMappingStateMachine {
  private allowedTransitions: Record<ObsProbesMappingState, ObsProbesMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsProbesMappingState, to: ObsProbesMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsProbesMappingState, to: ObsProbesMappingState): ObsProbesMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsProbesMapping: " + from + " -> " + to);
    }
    return to;
  }
}
