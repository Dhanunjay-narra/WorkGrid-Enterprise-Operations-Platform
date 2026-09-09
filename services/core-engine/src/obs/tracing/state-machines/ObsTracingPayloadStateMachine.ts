export type ObsTracingPayloadState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ObsTracingPayloadStateMachine {
  private allowedTransitions: Record<ObsTracingPayloadState, ObsTracingPayloadState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ObsTracingPayloadState, to: ObsTracingPayloadState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ObsTracingPayloadState, to: ObsTracingPayloadState): ObsTracingPayloadState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ObsTracingPayload: " + from + " -> " + to);
    }
    return to;
  }
}
