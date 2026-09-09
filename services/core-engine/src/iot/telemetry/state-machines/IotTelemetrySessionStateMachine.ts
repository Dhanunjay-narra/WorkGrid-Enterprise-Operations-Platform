export type IotTelemetrySessionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetrySessionStateMachine {
  private allowedTransitions: Record<IotTelemetrySessionState, IotTelemetrySessionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetrySessionState, to: IotTelemetrySessionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetrySessionState, to: IotTelemetrySessionState): IotTelemetrySessionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetrySession: " + from + " -> " + to);
    }
    return to;
  }
}
