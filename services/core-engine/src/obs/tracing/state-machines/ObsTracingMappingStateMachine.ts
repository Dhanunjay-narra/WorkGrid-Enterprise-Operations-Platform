export type ObsTracingMappingState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingMappingStateMachine {
  private allowedTransitions: Record<ObsTracingMappingState, ObsTracingMappingState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingMappingState, to: ObsTracingMappingState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingMappingState, to: ObsTracingMappingState): ObsTracingMappingState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingMapping: " + from + " -> " + to);
    }
    return to;
  }
}
