export type ProjectGanttRecordState = "DRAFT" | "PENDING_REVIEW" | "APPROVED" | "ACTIVE" | "SUSPENDED" | "TERMINATED";

export class ProjectGanttRecordStateMachine {
  private allowedTransitions: Record<ProjectGanttRecordState, ProjectGanttRecordState[]> = {
    DRAFT: ["PENDING_REVIEW", "ACTIVE", "TERMINATED"],
    PENDING_REVIEW: ["APPROVED", "DRAFT", "TERMINATED"],
    APPROVED: ["ACTIVE", "TERMINATED"],
    ACTIVE: ["SUSPENDED", "TERMINATED"],
    SUSPENDED: ["ACTIVE", "TERMINATED"],
    TERMINATED: []
  };

  public canTransition(from: ProjectGanttRecordState, to: ProjectGanttRecordState): boolean {
    return this.allowedTransitions[from]?.includes(to) ?? false;
  }

  public transition(from: ProjectGanttRecordState, to: ProjectGanttRecordState): ProjectGanttRecordState {
    if (!this.canTransition(from, to)) {
      throw new Error("Invalid state transition for ProjectGanttRecord: " + from + " -> " + to);
    }
    return to;
  }
}
