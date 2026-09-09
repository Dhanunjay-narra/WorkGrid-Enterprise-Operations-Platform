export type HrPerformancePayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class HrPerformancePayloadStateMachine {
  private allowedTransitions: Record<HrPerformancePayloadState, HrPerformancePayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: HrPerformancePayloadState, to: HrPerformancePayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: HrPerformancePayloadState, to: HrPerformancePayloadState): HrPerformancePayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for HrPerformancePayload: " + from + " -> " + to);
    }
    return to;
  }
}
