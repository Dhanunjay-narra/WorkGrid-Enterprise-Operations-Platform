export type IotTelemetryStateState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryStateStateMachine {
  private allowedTransitions: Record<IotTelemetryStateState, IotTelemetryStateState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryStateState, to: IotTelemetryStateState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryStateState, to: IotTelemetryStateState): IotTelemetryStateState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryState: " + from + " -> " + to);
    }
    return to;
  }
}
