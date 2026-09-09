export type IotTelemetryTransactionState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class IotTelemetryTransactionStateMachine {
  private allowedTransitions: Record<IotTelemetryTransactionState, IotTelemetryTransactionState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: IotTelemetryTransactionState, to: IotTelemetryTransactionState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: IotTelemetryTransactionState, to: IotTelemetryTransactionState): IotTelemetryTransactionState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for IotTelemetryTransaction: " + from + " -> " + to);
    }
    return to;
  }
}
