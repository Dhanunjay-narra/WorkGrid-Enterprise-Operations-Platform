export type IotTelemetryPolicyState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryPolicyStateMachine {
  private allowedTransitions: Record<IotTelemetryPolicyState, IotTelemetryPolicyState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryPolicyState, to: IotTelemetryPolicyState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryPolicyState, to: IotTelemetryPolicyState): IotTelemetryPolicyState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryPolicy: " + from + " -> " + to);
    }
    return to;
  }
}
